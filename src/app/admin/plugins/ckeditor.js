/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';


export default class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
    CodeBlock
];