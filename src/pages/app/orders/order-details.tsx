import { getOrderDetails } from "@/api/get-order-details";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface OrderDetailsProps {
    orderId: string
    open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
    const { data: pedido } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open,
    })


    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: {orderId}</DialogTitle>
                <DialogDescription> Detalhes do pedido</DialogDescription>
            </DialogHeader>

            {
                pedido && (
                    <div className="space-y-6">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="text-muted-foreground" >Status</TableCell>
                                    <TableCell className="flex justify-end" >
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-slate-400" />
                                            <span className="font-medium text-muted-foreground" >
                                                {pedido.status}
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground" >Cliente</TableCell>
                                    <TableCell className="flex justify-end" >
                                        {pedido.customer.name}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground" >Telefone</TableCell>
                                    <TableCell className="flex justify-end" >
                                        {pedido.customer.phone ?? "Não informado"}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground" >E-mail</TableCell>
                                    <TableCell className="flex justify-end" >
                                        {pedido.customer.email}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground" >Realizado há</TableCell>
                                    <TableCell className="flex justify-end" >
                                        {formatDistanceToNow(pedido.createdAt, {
                                            locale: ptBR,
                                            addSuffix: true
                                        })}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Produtos</TableHead>
                                    <TableHead className="text-right" >Qtd</TableHead>
                                    <TableHead className="text-right" >Preços</TableHead>
                                    <TableHead className="text-right" >Subtotal</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {pedido.orderItems.map(item => {
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.product.name}</TableCell>
                                            <TableCell className="text-right" >{item.quantity}</TableCell>
                                            <TableCell className="text-right" >{(item.priceInCents / 100).toLocaleString('pt-BR',
                                                { style: 'currency', currency: "BRL",}
                                            )}</TableCell>
                                            <TableCell className="text-right" >{(item.quantity * item.priceInCents /100).toLocaleString('pt-BR',
                                                { style: 'currency', currency: "BRL",}
                                            )}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3} >Total do pedido</TableCell>
                                    <TableCell className="text-right font-medium">{(pedido.totalInCents / 100).toLocaleString('pt-BR',
                                                { style: 'currency', currency: "BRL",}
                                            )}</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                )
            }
        </DialogContent>
    )
}