import React, { useState } from "react";

const Text = () => {
    const [EditMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 200, y: 100 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        >
            {EditMode ? (
                <input
                    onDoubleClick={(e) => setEditMode(false)}
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            ) : (
                <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>
            )}
        </div>
    );
};

export default Text;