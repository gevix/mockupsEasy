"use client";

import { Sidebar } from "flowbite-react";

export default function MySidebar() {
  return (
    <Sidebar aria-label="Default sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">Dashboard</Sidebar.Item>
          <Sidebar.Item href="#">Kanban</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
