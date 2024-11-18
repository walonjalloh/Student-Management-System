import { useState,useContext } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import AuthContext from "@/context/AuthContext"

interface Type {
    student:boolean,
    admin:boolean
}



export default function Login(){
    const { register } = useContext(AuthContext) || {}
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fullname, setFullname] = useState<string>('')
    const [type, setType] = useState<Type>({
        student:false,
        admin:false
    })

    //functions to handle the type change between student and admin
    const handleStudent = ():void => {
        setType({
            student:true,
            admin:false
        })

        const env = import.meta.env.VITE_NAME_FULL
console.log(env)
    }

    const handleAdmin = ():void => {
        setType({
            student:false,
            admin:true
        })
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        await register!(email,password)
        setEmail('')
        setFullname('')
        setPassword('')
    }
    return(
        <section className="mx-4 flex flex-col items-center justify-center min-h-screen">
          <div className="flex md:flex-row flex-col justify-between gap-4 lg:gap-10 items-center">
          <div className="flex flex-col flex-1">
                <h1 className="text-5xl font-bold text-center mb-5">Join the Future of Smarter Education!</h1>
                <p className="text-center font-medium text-xl my-10">Unlock the power of seamless student management. Create your account to get started with tracking progress, managing classes, and empowering academic excellence..</p>
                <Link to='/login' className="text-center mt-3 text-blue-500 text-lg font-bold hover:text-blue-700">or login to an existing account</Link>
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
                    <p className="text-4xl text-center my-5 font-bold">Register your student account </p>
                </div>
                <main>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <Label
                        htmlFor="fullname" 
                        className="font-bold text-lg mb-1">Fullname: </Label>
                        <Input
                        type="text"
                        id='fullname'
                        value={fullname}
                        onChange={(e)=>setFullname(e.target.value)} 
                        
                        placeholder="John Doe"
                        className="focus:rounded-full"
                        />
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
                        <Button className="mt-2 font-bold bg-blue-500 text-xl hover:bg-blue-700 hover:rounded-full">Register</Button>
                    </form>
                    <h3 className="mt-4 mb-4 text-center text-blue-300">forgot password......</h3>
                    <Link to='/contactus' className="text-center text-lg font-bold"><h3 className="text-black/70">Need help. contact support</h3></Link>
                </main>
                    </>
                )}
                {type.admin && (
                    <>
                    <div>
                    <p className="text-4xl text-center my-5 font-bold">Register your admin account </p>
                </div>
                <main>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <Label
                        htmlFor="fullname" 
                        className="font-bold text-lg mb-1">Fullname: </Label>
                        <Input
                        type="text"
                        id='fullname'
                        value={fullname}
                        onChange={(e)=>setFullname(e.target.value)} 
                        
                        placeholder="John Doe"
                        className="focus:rounded-full"
                        />
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
                        <Button className="mt-2 font-bold bg-blue-500 text-xl hover:bg-blue-700 hover:rounded-full">Register</Button>
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