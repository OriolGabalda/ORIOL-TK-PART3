/**
 * BLOCK: react-lifecycle-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element; // Import the Component base class from the React.js abstraction

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */

var el = wp.element.createElement;

wp.blocks.registerBlockType('new-gutenberg-block/notice-block', {
 title: 'Notice',  // Block name visible to user
 icon: 'lightbulb', // Toolbar icon can be either using WP Dashicons or custom SVG
 category: 'common', // Under which category the block would appear
 attributes: {   // The data this block will be storing
  type: { type: 'string', default: 'default' },   // Notice box type for loading the appropriate CSS class. Default class is 'default'.
  title: { type: 'string' },   // Notice box title in h4 tag
  content: { type: 'array', source: 'children', selector: 'p' }  /// Notice box content in p tag
 },
 edit: function(props) {
  
   function updateTitle( event ) {
      props.setAttributes( { title: event.target.value } );
   }
   function updateContent( newdata ) {
      props.setAttributes( { content: newdata } );
   }
   function updateType( event ) {
      props.setAttributes( { type: event.target.value } );
   }
   return el( 'div', 
      { 
         className: 'notice-box notice-' + props.attributes.type
      }, 
      el(
         'select', 
         {
            onChange: updateType,
            value: props.attributes.type,
         },
         el("option", {value: "default" }, "Default"),
         el("option", {value: "success" }, "Success"),
         el("option", {value: "danger" }, "Danger")
      ),
      el(
         'input', 
         {
            type: 'text', 
            placeholder: 'Enter title here...',
            value: props.attributes.title,
            onChange: updateTitle,
            style: { width: '100%' }
         }
      ),
      el(
         wp.editor.RichText,
         {
            tagName: 'p',
            onChange: updateContent,
            value: props.attributes.content,
            placeholder: 'Enter description here...'
         }
      )   
   ); // End return
}, // End edit()
 save: function(props) {
  
   return el( 'div', 
      { 
         className: 'notice-box notice-' + props.attributes.type
      }, 
      el(
         'h4', 
         null,
         props.attributes.title
      ),
      el( 
         wp.editor.RichText.Content, 
         {
            tagName: 'p',
            value: props.attributes.content
         }
      )
   
   ); // End return
     
} // End save()
});