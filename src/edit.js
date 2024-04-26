/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	/**
	 * Templates
	 */
	const MY_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'core/heading', { placeholder: 'Book Title' } ],
		[ 'core/paragraph', { placeholder: 'Summary' } ],
	];
	const blockProps = useBlockProps();
	// const innerBlocksProps = useInnerBlocksProps();
	const { children, innerBloksProps } = useInnerBlocksProps();
	return (
		<div {...blockProps}>
			{/* <InnerBlocks
			template={ MY_TEMPLATE }
			parent={'core/heading'}
			orientation='horizontal' defaultBlock={['core/heading', {placeholder: "Please ensert a paragraph"}]}/> */}
			{/* <div { ...innerBlocksProps } /> */}
			<div {...innerBloksProps}>
				<h1>Inner contents are below</h1>
				{ children }
				<h1>This heading after inner content</h1>
			</div>
		</div>
	);
}
