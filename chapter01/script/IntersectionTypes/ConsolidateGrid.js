"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConsolidatedGrid(grid, margin) {
    let consolidatedGrid = {};
    consolidatedGrid.Width = grid.Width + margin.Width;
    consolidatedGrid.Height = grid.Height + margin.Height;
    consolidatedGrid.Left = margin.Left;
    consolidatedGrid.Right = margin.Right;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}
//# sourceMappingURL=ConsolidateGrid.js.map