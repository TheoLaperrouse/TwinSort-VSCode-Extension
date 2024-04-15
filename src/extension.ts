import * as vscode from 'vscode';
import json5 from 'json5';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('twinsort.sortJsonAndArray', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            try {
                const data = json5.parse(text);
                let sortedData;

                if (Array.isArray(data)) {
                    sortedData = data.sort();
                } else if (typeof data === 'object') {
                    sortedData = sortKeys(data);
                }

                let formattedText = JSON.stringify(sortedData);
                editor.edit((editBuilder) => {
                    editBuilder.replace(selection, formattedText);
                });
            } catch (error) {
                vscode.window.showErrorMessage('Invalid JSON');
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

function sortKeys(obj: Record<string, any>): Record<string, any> {
    const keys = Object.keys(obj).sort();
    const sortedObj = keys.reduce(
        (acc: Record<string, any>, key: string) => {
            acc[key] = obj[key];
            return acc;
        },
        {} as Record<string, any>,
    );
    return sortedObj;
}
