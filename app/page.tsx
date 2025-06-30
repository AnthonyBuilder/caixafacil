'use client';

import React, { useState } from "react";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
// input 
import { Input } from "@/components/ui/input"

// select
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

//textArea 
import { Textarea } from "@/components/ui/textarea"

//select view

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="max-w-md">
        <SelectValue placeholder="Selecione a Maquininha" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cartões</SelectLabel>
          <SelectItem value="apple">Cielo</SelectItem>
          <SelectItem value="banana">Punto</SelectItem>
          <SelectItem value="blueberry">ValeCard</SelectItem>
          <SelectItem value="grapes">Pix</SelectItem>
          <SelectItem value="pineapple">GetNet</SelectItem>
          <SelectItem value="shellbox">ShellBox</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


export function SelectTable() {
  return (
    <Table>
      <TableCaption>Lista de cartões a ser somado.</TableCaption>
      <TableHeader>
        <TableRow>
            <TableCell className="font-medium">
              <SelectDemo></SelectDemo>
            </TableCell>
            <TableCell className="right-0">
              <Input placeholder="Valor" type="number" inputMode="decimal"></Input>
            </TableCell>
            <TableCell>
              <Button type="submit">Adicionar</Button>
            </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <p className="text-sm">ValeCard</p>
          </TableCell>
          <TableCell>
            <p className="text-sm text-right">R$ 1.200,00</p>
          </TableCell>
          <TableCell>
            <Button>Editar</Button>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <p className="text-sm">Punto</p>
          </TableCell>
          <TableCell>
            <p className="text-sm text-right">R$ 674,98</p>
          </TableCell>
          <TableCell>
            <Button>Editar</Button>
          </TableCell>
        </TableRow>

          <TableRow>
          <TableCell>
            <p className="text-sm">Shellbox</p>
          </TableCell>
          <TableCell>
            <p className="text-sm text-right">R$ 764,28</p>
          </TableCell>
          <TableCell>
            <Button>Editar</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Data</TableHead>
          <TableHead>Turno</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
export function Calendar22() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}



export default function Home() {
  return (
    <div className="margin-auto flex-auto mx-2 font-sans pt-10">
      <NavigationMenuWithViews />
    </div>
  );
}

type ViewType = "cr-caixa" | "ac-caixa" | "settings";

var dateNow = new Date().toLocaleDateString();

function MainView({ view }: { view: ViewType }) {
  switch (view) {
    case "ac-caixa":
      return (
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Caixas</h1>
          <TableDemo />
          <p className="mt-4 text-sm text-gray-500">
            financial data is for demonstration purposes only.
          </p>
        </div>);

    case "cr-caixa":
    default:
      return (
        <div className="max-w-auto mx-auto p-2">
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Fechamento de Caixa</h1>
            <h1 className="m-auto text-left">{dateNow}</h1>
          </div>
          <div className="mt-5 mb-10">
            <h1 className="text-2xl">Responsavel pelo turno</h1>
            <p className="text-sm">Nome Funcionario</p>
          </div>

          <div className="mt-5 mb-10">
            <h1 className="text-2xl font-bold">Medição de combustivel Telemed</h1>
            <div className="flex flex-row m-2 space-x-3">
              <Input placeholder="Gas. Comum" type="number"></Input>
              <Input placeholder="Gas. Aditivada" type="number"></Input>
              <Input placeholder="Etanol Comum"type="number"></Input>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Total Cartões</h1>
            <SelectTable></SelectTable>
          </div>


          <div className="mt-5 mb-10">
            <h1 className="text-2xl font-bold">Observações</h1>
            <p className="text-sm">Descreva informações sobre o caixa</p>
            <div className="m-2">
              <Textarea placeholder="Observações sobre o turno" />
            </div>
          </div>
        </div>
      );
  }
}

export function NavigationMenuWithViews() {
  const [view, setView] = useState<ViewType>("cr-caixa");

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button>Login</Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => setView("cr-caixa")}>
              <h1 className="text-lg">Criar Caixa</h1>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => setView("ac-caixa")}>
              <h1 className="text-lg">Acessar Caixas</h1>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MainView view={view} />
    </div>
  );
}

