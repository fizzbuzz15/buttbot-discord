# ButtBot Discord (A Discord ButtBot)

hi! this is a fork of sct's original buttbot. i installed it on my own server and have started adding features that my friends found useful

if you want this on your server then download and run it yourself with your own discord application bot token (possible documentation on this process coming eventually, maybe)

## Changelog

### 1.6.1-fizzbuzzpatch1

- add "shutup" feature to make buttbot temporarily stop buttifying messages on a server, for when you are tired of the butts

### 1.6.1

- Restore correct voting time

### 1.6.0

- ButtBot will now use Discord's new button functionality for voting

### 1.5.0

- ButtBot will now use Discord's build in reply functionality when buttifying messages
- ButtBot will no longer buttify url's

### 1.4.5

- Fixes an issue where some words contained the configured meme but were still being chosen to be changed (Thank you @nicospz)

### 1.4.4

- Fixes issue with buttBuffer setting not actually working

### 1.4.3

- Fixes a bug where the default config object was being mutated, causing inconsistencies in configs between servers

### 1.4.2

- Added more debug logging to message handling to figure out why the reaction collector isn't working sometimes

### 1.4.1

- Cleaned up logging for failed commands due to user error

### 1.4.0

- Update vote handling to use reaction controller to fix issues with the voting dying after some time

### 1.3.0

- Buttbot now supports plurals (finally). If the word was originally plural, it will be converted back to a plural after buttification. (This doesn't work with edge case plurals because once it's converted the plural support no longer works)
- Buttbot no longer buttifies the configured meme (butt) when it is plural.

### 1.2.3

- Adjusted default butt chance to 5% and default butt buffer to 10 messages

### 1.2.2

- Fixes an issue where ButtBot crashes if any error is thrown from the Discord client

### 1.2.1

- Make it clear that voting on a message has ended. The bot will now add a lock emoji after voting ends.

### 1.2.0

- Converted the project to Typescript
- Fixed issue where the bot would often choose the first word and ignore normal replacement rules

### 1.1.3

- Added mini api server to allow querying for bot stats

### 1.1.2

- Do not use words with scores if the score is 0

### 1.1.1

- Initial ButtAI experimental release

### 1.1.0

- Initial ButtAI Code
- Added compaction interval for db on hourly basis so we don't lose any precious butt settings.

## License

See LICENSE file
