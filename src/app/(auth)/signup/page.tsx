"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2, 'Preencha seu nome de usuário'),
    password: z.string().min(8, 'Senha deve conter pelo menos 8 caracteres'),
})

const page = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    return(
        <Form {...form}>
            <h2 className="text-xl">Entre na sua conta</h2>

            <form className="flex flex-col gap-4 w-full min-w-60">
                <FormField 
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seu Nome de Usuário</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field}
                                    className="text-black"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sua Senha</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    {...field}
                                    className="text-black"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Entrar</Button>
            </form>

            <div className="text-xs flex items-center">
                Não tem uma conta?
                <Button variant={"link"} onClick={() => router.push('/signin')}>registrar</Button>
            </div>
        </Form>

        
    )
}

export default page