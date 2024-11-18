import { useState, useContext} from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import AuthContext from "../context/AuthContext"


interface Type {
    student:boolean,
    admin:boolean
}

export default function Login(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [type, setType] = useState<Type>({
        student:false,
        admin:false
    })

    const { login } = useContext(AuthContext) || {}

    //functions to handle the type change between student and admin
    const handleStudent = ():void => {
        setType({
            student:true,
            admin:false
        })
    }

    const handleAdmin = ():void => {
        setType({
            student:false,
            admin:true
        })
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        await login!(email,password)
        setEmail('')
        setPassword('')
    }
    return(
        <section className="mx-4 flex flex-col items-center justify-center min-h-screen">
          <div className="flex md:flex-row flex-col justify-between gap-4 lg:gap-10 items-center">
          <div className="flex flex-col flex-1">
                <h1 className="text-5xl font-bold text-center mb-5">Welcome back to the future of education</h1>
                <p className="text-center font-medium text-xl my-10">Manage your institution, track student progress, and simplify your administrative tasks all in one place. Log in to access your personalized dashboard and get started.</p>
                <Link to='/register' className="text-center mt-3 text-blue-500 text-lg font-bold hover:text-blue-700">or create your account</Link>
            </div>
            <div className="flex flex-col flex-1">
                <div className='flex justify-center items-center gap-4'>
                    <Button
                    className="bg-blue-500 font-bold w-[150px] hover:bg-blue-700 focus:rounded-full "
                    onClick={handleStudent}>student</Button>
                    <Button
                    className="font-bold w-[150px] focus:rounded-full"
                    onClick={handleAdmin}>admin</Button>
                </div>
                {type.student  && (
                    <>
                    <div>
                    <p className="text-4xl text-center my-5 font-bold">Login to your student account </p>
                </div>
                <main>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <Label
                        htmlFor="email" 
                        className="font-bold text-lg mb-1">Email: </Label>
                        <Input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} 
                        required
                        placeholder="example@gmail.com"
                        className="focus:rounded-full"
                        />
                        <Label
                        htmlFor="password" 
                        className="font-bold text-lg mb-1">Password: </Label>
                        <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        placeholder="password"
                        className="focus:rounded-full"
                        />
                        <Button className="mt-2 font-bold bg-blue-500 text-xl hover:bg-blue-700 hover:rounded-full">Login</Button>
                    </form>
                    <h3 className="mt-4 mb-4 text-center text-blue-300">forgot password......</h3>
                    <Link to='/contactus' className="text-center text-lg font-bold"><h3 className="text-black/70">Need help. contact support</h3></Link>
                </main>
                    </>
                )}
                {type.admin && (
                    <>
                    <div>
                    <p className="text-4xl text-center my-5 font-bold">Login to your admin account </p>
                </div>
                <main>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <Label
                        htmlFor="email" 
                        className="font-bold text-lg mb-1">Email: </Label>
                        <Input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} 
                        required
                        placeholder="example@gmail.com"
                        className="focus:rounded-full"
                        />
                        <Label
                        htmlFor="password" 
                        className="font-bold text-lg mb-1">Password: </Label>
                        <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        placeholder="password"
                        className="focus:rounded-full"
                        />
                        <Button className="mt-2 font-bold bg-blue-500 text-xl hover:bg-blue-700 hover:rounded-full">Login</Button>
                    </form>
                    <h3 className="mt-4 mb-4 text-center text-blue-300">forgot password......</h3>
                    <Link to='/contactus' className="text-center text-lg font-bold"><h3 className="text-black/70">Need help. contact support</h3></Link>
                </main>
                    </>
                )}
            </div>
          </div>
        </section>
    )
}