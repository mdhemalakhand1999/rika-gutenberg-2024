import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

export default function save() {
	const blockProps = useBlockProps.save();
	// const innerBlocksprops = useInnerBlocksProps.save();
	const { children, innerBlocksprops } = useInnerBlocksProps.save();
	return (
		<div { ...blockProps }>
			{/* <InnerBlocks.Content /> */}
			{/* <div { ...innerBlocksprops } /> */}
			<div {...innerBlocksprops}>
				<h1>Inner contents are below</h1>
				{ children }
				<h1>This heading after inner content</h1>
			</div>
		</div>
	);
}
