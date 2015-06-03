mimosa-protagonist
===========

## Overview

This is a [protagonist](https://github.com/apiaryio/protagonist) module for the Mimosa build tool. It will parse your `.md` files in your [API Blueprint](https://apiblueprint.org/) specification and provide errors/warnings to the console.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'protagonist'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module processes each `.md` file in your project's `watchDir` through protagonist, which will validate the contents of the file vs the API Blueprint specification and report any errors/warnings to the console.

## Default Config

This module has no configuration.  Need something to be configurable?  File an issue!