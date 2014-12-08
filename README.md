# grunt-modulesConverter

> Modules converter

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-modulesConverter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-modulesConverter');
```

## The "modulesConverter" task

### Overview
In your project's Gruntfile, add a section named `modulesConverter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  modulesConverter: {
    amd: {
      // to convert common javascript to AMD (to use for example with RequireJS).
    },
    cjs: {
      // to convert common javascript to CommonJS (to use for example with Browserify or NodeJS)
    },
  },
})
```

### Configuration

#### [target].files
See http://gruntjs.com/configuring-tasks#files

#### [target].type
Type: `String`
Default value: `'amd'`

A string value that is used to know how to convert the module.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  modulesConverter: {
    amd: {
        files: [{
            expand: true,
            cwd: 'src/modules/',
            src: ['**/*'],
            dest: 'bin/amd/'
        }],
        type:"amd"
    },
    cjs: {
        files: [{
            expand: true,
            cwd: 'src/modules/',
            src: ['**/*'],
            dest: 'bin/cjs/'
        }],
        type:"cjs"
    }
  },
})
```

## Release History
_0.0.7_: Adding documentation on README.md.
_0.0.6_: Adding correct configuration on package.json.
_0.0.5_: First commit with default converters to JS modules to AMD and CommonJS.

## License
Copyright (c) 2014 Andres Lozada Mosto. Licensed under the MIT license.
