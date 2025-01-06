import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid } from "recharts"
import colors from 'tailwindcss/colors'

const data = [
    { date: '10/12', revenue: 1200 },
    { date: '11/12', revenue: 800 },
    { date: '12/12', revenue: 900 },
    { date: '13/12', revenue: 400 },
    { date: '14/12', revenue: 2300 },
    { date: '15/12', revenue: 800 },
    { date: '16/12', revenue: 640 },
]

export function RevenueChart() {
    return (
        <Card className="col-span-6" >
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium" >Receita no período</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <CartesianGrid vertical={false} /*exibe só as lihas horizontais do grid*/className="stroke-muted" />

                        <Line type="linear" strokeWidth={2} dataKey="revenue" name="Receita" stroke={colors.violet[500]} />
                        <YAxis stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value: number) => value.toLocaleString("pt-BR", { style: 'currency', currency: "BRL" })}
                        />
                        <XAxis tickLine={false}
                            dataKey="date"
                            axisLine={false}
                            dy={16}
                        />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}