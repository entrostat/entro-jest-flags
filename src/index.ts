import { Command } from '@oclif/command';
import * as path from 'path';
import { promises as fs } from 'fs';

class EntroJestFlags extends Command {
    static description = 'Converts the flags set in a JSON file to jest flags';

    static flags = {};

    static args = [
        {
            name: 'config',
            required: true,
            description: 'The path to the config json file',
        },
    ];

    async run() {
        const { args } = this.parse(EntroJestFlags);
        const configPath = path.resolve(args.config);
        try {
            const flags: string[] = [];
            const config: any = await fs
                .readFile(configPath)
                .then(d => d.toString())
                .then(d => JSON.parse(d));
            if (config.namePattern) {
                flags.push(`--testNamePattern="${config.namePattern}"`);
            }
            if (config.pathPattern) {
                flags.push(`--testPathPattern="${config.pathPattern}"`);
            }
            console.log(flags.join(' '));
            this.exit(0);
        } catch (e) {
            // We don't output anything
            this.exit(0);
        }
    }
}

export = EntroJestFlags;
