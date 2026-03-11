"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";

const orders = [
  {
    id: 1,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$25",
    ordered: "Jan 06, 2025",
  },
  {
    id: 2,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$50",
    ordered: "Jan 06, 2025",
  },
  {
    id: 3,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$100",
    ordered: "Jan 06, 2025",
  },
  {
    id: 4,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$15",
    ordered: "Jan 06, 2025",
  },
  {
    id: 5,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$75",
    ordered: "Jan 06, 2025",
  },
  {
    id: 6,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$40",
    ordered: "Jan 06, 2025",
  },
  {
    id: 7,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$120",
    ordered: "Jan 06, 2025",
  },
  {
    id: 8,
    product: "Enclomiphene",
    category: "Men HRT",
    price: "$20",
    ordered: "Jan 06, 2025",
  },
];

export default function OrderHistorySection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[32px] font-semibold leading-tight text-[#253C67] sm:text-[42px] lg:text-[52px]">
            Order history
          </h2>
        </div>

        {/* Desktop / Tablet Table */}
        <div className="mt-8 hidden overflow-hidden rounded-[10px] border border-[#e8e8e8] bg-white sm:mt-10 md:block">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#dfe7ef] bg-[#DEEEFF] hover:bg-[#dbeeff]">
                <TableHead className="h-12 pl-8 text-[13px] font-medium text-[#28457a]">
                  Product
                </TableHead>
                <TableHead className="text-[13px] font-medium text-[#28457a]">
                  Category
                </TableHead>
                <TableHead className="text-[13px] font-medium text-[#28457a]">
                  Price
                </TableHead>
                <TableHead className="text-[13px] font-medium text-[#28457a]">
                  Ordered
                </TableHead>
                <TableHead className="pr-8 text-center text-[13px] font-medium text-[#28457a]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  className="h-[66px] border-b border-[#ededed] hover:bg-[#fafafa]"
                >
                  <TableCell className="pl-8 text-[15px] font-medium text-[#222]">
                    {order.product}
                  </TableCell>
                  <TableCell className="text-[15px] text-[#8a8a8a]">
                    {order.category}
                  </TableCell>
                  <TableCell className="text-[15px] text-[#5d5d5d]">
                    {order.price}
                  </TableCell>
                  <TableCell className="text-[15px] text-[#7a7a7a]">
                    {order.ordered}
                  </TableCell>
                  <TableCell className="pr-8 text-center">
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[#f1f5f9]"
                      aria-label={`View order ${order.id}`}
                    >
                      <Eye className="h-4.5 w-4.5 text-[#222]" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="mt-8 space-y-4 md:hidden">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-[12px] border border-[#e8e8e8] bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#222]">
                    {order.product}
                  </h3>
                  <p className="mt-1 text-sm text-[#8a8a8a]">{order.category}</p>
                </div>

                <button
                  type="button"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] transition hover:bg-[#f8fafc]"
                  aria-label={`View order ${order.id}`}
                >
                  <Eye className="h-4.5 w-4.5 text-[#222]" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-[#f8fafc] p-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#8a8a8a]">
                    Price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#222]">
                    {order.price}
                  </p>
                </div>

                <div className="rounded-md bg-[#f8fafc] p-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#8a8a8a]">
                    Ordered
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#222]">
                    {order.ordered}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}