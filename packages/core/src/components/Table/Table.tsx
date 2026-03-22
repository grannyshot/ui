import React, { forwardRef } from 'react'
import {
  tableRoot,
  tableHeader,
  tableHeaderCell,
  tableBody,
  tableRow,
  tableCell,
  tableCaption,
} from './table.recipe'
import { cx } from '@/styled-system/css'

const TableRoot = forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  return <table ref={ref} className={cx(tableRoot, className)} {...props} />
})

TableRoot.displayName = 'Table.Root'

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return <thead ref={ref} className={cx(tableHeader, className)} {...props} />
})

TableHeader.displayName = 'Table.Header'

const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return <th ref={ref} className={cx(tableHeaderCell, className)} {...props} />
})

TableHeaderCell.displayName = 'Table.HeaderCell'

const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return <tbody ref={ref} className={cx(tableBody, className)} {...props} />
})

TableBody.displayName = 'Table.Body'

const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  return <tr ref={ref} className={cx(tableRow, className)} {...props} />
})

TableRow.displayName = 'Table.Row'

const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return <td ref={ref} className={cx(tableCell, className)} {...props} />
})

TableCell.displayName = 'Table.Cell'

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => {
  return (
    <caption ref={ref} className={cx(tableCaption, className)} {...props} />
  )
})

TableCaption.displayName = 'Table.Caption'

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  HeaderCell: TableHeaderCell,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption,
}