import * as vscode from 'vscode';
import { Commands } from './types';

export function activate(context: vscode.ExtensionContext) {

    // Collect all disposables.
    const disposable: vscode.Disposable[] = [];

    // Register the `randomizer.randNumber` command.
    disposable.push(
        vscode.commands.registerCommand(Commands.RANDOM_NUMBER, () => {
            // Generate a random integer between 0-9
            const number = Math.floor(Math.random() * 10);
            vscode.window.showInformationMessage(`Random Number: ${number}`);
        })
    );

    context.subscriptions.push(...disposable);
}

export function deactivate() { }
