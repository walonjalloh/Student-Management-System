import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Type {
    student:boolean,
    teacher:boolean,
    hod:boolean,
    dean:boolean
}
// weather is it student, teacher, hod,dean
export default function Login(){
    const [type,setType] = useState<Type>({
        student:false,
        teacher:false,
        hod:false,
        dean:false
    })

    const handleStudent = ():void => {
        setType({
            student:true,
            teacher:false,
            hod:false,
            dean:false
        })
    }
    const handleTeacher = ():void => {
        setType({
            student:false,
            teacher:true,
            hod:false,
            dean:false
        })
    }
    const handleHod = ():void => {
        setType({
            student:false,
            teacher:false,
            hod:true,
            dean:false
        })
    }
    const handleDean = ():void => {
        setType({
            student:false,
            teacher:false,
            hod:false,
            dean:true
        })
    }
    return(
        <section>
            <h1>Login</h1>
            <div>
                <Button onClick={handleStudent}>Student</Button>
                <Button onClick={handleTeacher}>Teacher</Button>
                <Button onClick={handleHod}>HOD</Button>
                <Button onClick={handleDean}>Dean</Button>
            </div>
            <main>
               { type.student && (
                 <form action="">
                 <Label htmlFor='fullname'>Student Name</Label>
                 <Input
                 type='text'
                 id="fullname"
                 placeholder="John Doe"
                 required
                 />
                 <Label htmlFor='password'>Password</Label>
                 <Input
                 type='password'
                 id='password'
                 placeholder="password"
                 required
                 />
                 <Button>Login</Button>
             </form>
               )}
               {type.dean && (
                 <form action="">
                 <Label htmlFor='fullname'>Dean Name</Label>
                 <Input
                 type='text'
                 id="fullname"
                 placeholder="John Doe"
                 required
                 />
                 <Label htmlFor='password'>Password</Label>
                 <Input
                 type='password'
                 id='password'
                 placeholder="password"
                 required
                 />
                 <Button>Login</Button>
             </form>
               )}
               {type.hod && (
                 <form action="">
                 <Label htmlFor='fullname'>HOD Name</Label>
                 <Input
                 type='text'
                 id="fullname"
                 placeholder="John Doe"
                 required
                 />
                 <Label htmlFor='password'>Password</Label>
                 <Input
                 type='password'
                 id='password'
                 placeholder="password"
                 required
                 />
                 <Button>Login</Button>
             </form>
               )}
               {type.teacher && (
                 <form action="">
                 <Label htmlFor='fullname'>Teacher Name</Label>
                 <Input
                 type='text'
                 id="fullname"
                 placeholder="John Doe"
                 required
                 />
                 <Label htmlFor='password'>Password</Label>
                 <Input
                 type='password'
                 id='password'
                 placeholder="password"
                 required
                 />
                 <Button>Login</Button>
             </form>
               )}
            </main>
        </section>
    )
}