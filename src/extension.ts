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

    // Register the `randomizer.randNumberInBetween` command.
    disposable.push(
        vscode.commands.registerCommand(Commands.RANDOM_NUMBER_IN_BETWEEN, async () => {

            const min = await vscode.window.showInputBox({
                ignoreFocusOut: true,
                placeHolder: 'Please provide a minimum number.',
                prompt: 'Minimum Number',
                validateInput: (value) => {
                    const minimum = parseInt(value);
                    if (typeof minimum !== 'number') {
                        return undefined;
                    }
                }
            });

            const max = await vscode.window.showInputBox({
                ignoreFocusOut: true,
                placeHolder: 'Please provide a max number.',
                prompt: 'Maximum Number',
                validateInput: (value) => {
                    const maximum = parseInt(value);
                    if (typeof maximum !== 'number') {
                        return undefined;
                    }
                }
            });

            if (!!min && !!max) {
                const minNumber = parseInt(min);
                const maxNumber = parseInt(max);
                const number = Math.floor(Math.random() * maxNumber) + minNumber;
                vscode.window.showInformationMessage(`Random Number: ${number}`);
            }
        })
    );

    context.subscriptions.push(...disposable);
}

export function deactivate() { }
