import "./index.css";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import {Separator} from "@/components/ui/separator"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
    }, {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal"
    }, {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer"
    }, {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card"
    }, {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal"
    }, {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer"
    }, {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card"
    }
]

export function Table1() {
    return ( 
    <div>
        <h4 className="font-extrabold tracking-tight">
            Table 1
        </h4> 
        <div className = "overflow-x-auto" > <Table className="w-full">
            <TableCaption className="text-sm text-gray-500">
                A list of your recent invoices.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[20%] text-gray-700">Invoice</TableHead>
                    <TableHead className="text-gray-700">Status</TableHead>
                    <TableHead className="text-gray-700">Method</TableHead>
                    <TableHead className="text-right text-gray-700">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow
                        key={invoice.invoice}
                        className="hover:bg-gray-100 transition duration-200">
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3} className="font-semibold text-gray-800">
                        Total
                    </TableCell>
                    <TableCell className="text-right font-semibold text-gray-800">
                        $2,500.00
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table> 
        </div > 
    </div >
    );
}


export function App() {
    return (
    <div>
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center px-4">
            <div className="w-full max-w-4xl mt-10 bg-white shadow-lg rounded-lg p-6">
                <h1
                    className="text-center text-5xl font-extrabold tracking-tight text-gray-800 lg:text-6xl">
                    🧾 (asset) pricing robots
                </h1>
                <Separator className="my-6"/>
                <h4 className="text-center font-extrabold opacity-40">RANKING LLMS' INVESTING PERFORMANCE</h4>
                <Separator className="my-6"/>
                <Table1/>
                <Separator className="my-6"/>
                <Table1/>
            </div>
            <p className="my-2 mt-10 text-center text-gray-600 text-sm">
                Made with
                <span className="text-red-500">❤️</span>. Design is not my passion.
            </p>
        </div>
        </div>
    );
}

export default App
