import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";

export function LoginForm() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
                <CardDescription>
                    Ingrese sus credenciales a continuación.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Usuario</Label>
                    <Input id="email" type="email" required/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required/>
                </div>
            </CardContent>
            <CardFooter>

                <Link className="w-full" href={"/dashboard"}>
                    <Button className="w-full">
                        Iniciar Sesión
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
