'use client'

import { Table } from '@grannyshot/ui'

export function TablePreview() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Charlie</Table.Cell>
          <Table.Cell>PM</Table.Cell>
          <Table.Cell>Away</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
