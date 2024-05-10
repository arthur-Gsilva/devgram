import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    params: {
        name: string
    }
}

const Layout = ({ children, params }: Props) => {
    return(
        <div className="flex bg-gray-800 h-screen">
            <div className="flex-1 flex items-center justify-center">
                <div className="text-white w-2/4">
                    <div className="flex flex-col items-center gap-5 p-5 w-full min-w-60">
                        <div className="flex items-center  gap-6">
                            {/* <img 
                                src="/images/logo.png" 
                                alt="Logo da Devgram"
                                className="w-12 h-12 rounded-full"
                            /> */}
                            <h3 className="text-3xl">Devgram</h3>
                        </div>

                        

                        {children}
                    </div>
                </div>
            </div>

            <div className="flex-1 h-screen bg-center bg-no-repeat bg-cover hidden sm:block bg-[url(/images/auth-bg.jpg)]">
            </div>
        </div>
    )
}

export default Layout

