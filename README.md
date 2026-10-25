# Audio Gate

A Foundry VTT V14 module that prevents audio files (configurable per-extension) from leaving the host's network.   Improving load times for players where the GM is not streaming audio via Foundry due to poor network speeds.  

The GM still hears audio as normal, and can use this to stream the audio over another service such as OBS/Discord, or through speakers in-person.  

As the configuration is per file extension, it is possible to maintain your World's data such that some types of audio are streamable (perhaps smaller, ambient sounds) whilst preventing large music files from being streamed to all players, by segregating audio file purpose by file type.  

## Why Gate Audio?

For each player connected to a world playing audio, the host's upload is strained by another streaming channel. On poor internet connections, this makes each subsequent player connect times, scene load times and general play slower for every additional player connected.  

For GMs on a poor upload speed, connection and load times can be improved by denying these network requests, and instead streaming your audio over your voice chat software, where you stream only one upload channel.

This is acheived by intercepting the player's network requests, the client never requests the audio file, therefore the host never spends any upload. This allows player track sync to remain, players can still see the name of tracks.  

## Use

- With the module enabled, by default all .ogg files are blocked to clients. More options are configurable by the GM. Clients don't need to do anything for the module to work.  

## Changelog

- v1.1.0 added extension-based filtering  
- v1.0.0 release