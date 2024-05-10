"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, 'Preencha seu nome'),
    username: z.string().min(2, 'Preencha seu nome de usuário'),
    email: z.string().email(),
    password: z.string().min(8, 'Senha deve conter pelo menos 8 caracteres'),
})

const page = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: ""
        }
    })

    return(
        <Form {...form}>
            <h2 className="text-xl">Crie sua nova conta</h2>
            
            <form className="flex flex-col gap-4 w-full">
                <FormField 
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seu Nome</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    autoFocus
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
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seu Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
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

                <Button type="submit">Registrar</Button>
            </form>

            <div className="text-xs flex items-center">
                Já tem uma conta?
                <Button variant={"link"} onClick={() => router.push('/signup')}>Entrar</Button>
            </div>
        </Form>

        
    )
}

export default page