// import { Table as BTable } from "react-bootstrap";
// import {
// 	ColumnDef,
// 	flexRender,
// 	getCoreRowModel,
// 	useReactTable,
// } from "@tanstack/react-table";
// import { useState } from "react";
// import dataJson from "../../data/data.json";
// import { Entity } from "../../types/Entity";

// const columns: ColumnDef<Entity>[] = [
// 	{
// 		header: "Id",
// 		footer: (props) => props.column.id,
// 		columns: [
// 			{
// 				accessorKey: "Id",
// 				cell: (info) => info.getValue(),
// 				footer: (props) => props.column.id,
// 			},
// 		],
// 	},
// 	{
// 		header: "Name",
// 		footer: (props) => props.column.id,
// 		columns: [
// 			{
// 				accessorKey: "Name",
// 				cell: (info) => info.getValue(),
// 				footer: (props) => props.column.id,
// 			},
// 		],
// 	},
// ];

// export function Entities() {
// 	const [data] = useState(dataJson as Entity[]);
// 	const table = useReactTable({
// 		data,
// 		columns,
// 		getCoreRowModel: getCoreRowModel(),
// 	});

// 	return (
// 		<>
// 			<BTable striped bordered hover responsive size="sm">
// 				<thead>
// 					{table.getHeaderGroups().map((headerGroup) => (
// 						<tr key={headerGroup.id}>
// 							{headerGroup.headers.map((header) => (
// 								<th key={header.id} colSpan={header.colSpan}>
// 									{header.isPlaceholder
// 										? null
// 										: flexRender(
// 												header.column.columnDef.header,
// 												header.getContext(),
// 										  )}
// 								</th>
// 							))}
// 						</tr>
// 					))}
// 				</thead>
// 				<tbody>
// 					{table.getRowModel().rows.map((row) => (
// 						<tr key={row.id}>
// 							{row.getVisibleCells().map((cell) => (
// 								<td key={cell.id}>
// 									{flexRender(cell.column.columnDef.cell, cell.getContext())}
// 								</td>
// 							))}
// 						</tr>
// 					))}
// 				</tbody>
// 				<tfoot>
// 					{table.getFooterGroups().map((footerGroup) => (
// 						<tr key={footerGroup.id}>
// 							{footerGroup.headers.map((header) => (
// 								<th key={header.id} colSpan={header.colSpan}>
// 									{header.isPlaceholder
// 										? null
// 										: flexRender(
// 												header.column.columnDef.footer,
// 												header.getContext(),
// 										  )}
// 								</th>
// 							))}
// 						</tr>
// 					))}
// 				</tfoot>
// 			</BTable>
// 		</>
// 	);
// }
