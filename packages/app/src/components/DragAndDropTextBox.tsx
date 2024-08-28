import React from "react";
import styled from 'styled-components';
import { useDragAndDrop } from '../hooks/useDragAndDrop';

const DragAndDropTextBoxWrapper = styled.div`
	display: flex;
	height:120px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px dashed #ccc;
	padding: 20px;
`;

type Props = {
	onFileDrop: (file: File) => void;
};

const DragAndDropTextBox: React.FC<Props> = ({ onFileDrop }) => {
	const {
		dragging,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handleDragEnd,
	} = useDragAndDrop();

	return (
		<DragAndDropTextBoxWrapper
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
			onDrop={(e) => handleDrop(e, onFileDrop)}
		>
			{dragging ? (
				<div>Drop here</div>
			) : (
				<div>Drop .eml file here</div>
			)}
		</DragAndDropTextBoxWrapper>
	);
};

export default DragAndDropTextBox;
