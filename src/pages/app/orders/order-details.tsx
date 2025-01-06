import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 172459180</DialogTitle>
                <DialogDescription> Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground" >Status</TableCell>
                            <TableCell className="flex justify-end" >
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground" >
                                        Pendents
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground" >Cliente</TableCell>
                            <TableCell className="flex justify-end" >
                                Pedro Sodré Malini
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground" >Telefone</TableCell>
                            <TableCell className="flex justify-end" >
                                (27) 98765-4321
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground" >E-mail</TableCell>
                            <TableCell className="flex justify-end" >
                                pedro.malini@ctjunior.com.br
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground" >Realizado há</TableCell>
                            <TableCell className="flex justify-end" >
                                Há 3 minutos
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
                        <TableRow>
                            <TableCell>Pizza Pepperoni Família</TableCell>
                            <TableCell className="text-right" >2</TableCell>
                            <TableCell className="text-right" >R$ 69.90</TableCell>
                            <TableCell className="text-right" >R$ 139,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Portuguesa Família</TableCell>
                            <TableCell className="text-right" >2</TableCell>
                            <TableCell className="text-right" >R$ 59.90</TableCell>
                            <TableCell className="text-right" >R$ 119,80</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3} >Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">R$ 259,60</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}