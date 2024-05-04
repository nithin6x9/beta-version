import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal'
import {useState,useCallback} from 'react';
import Input from '../Input';
import Modal from '../Modal';

const LoginModal = ()=>{
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [email,setEmal] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading,setIsLoading] = useState('');

    const onToggle = useCallback(()=>{
        if (isLoading){
                return;
        }
        registerModal.onOpen();
        loginModal.onClose();
    },[isLoading,registerModal,loginModal]);

    const onSubmit = useCallback (async ()=>{
        try{
            setIsLoading(true);
                //Authentication 

            loginModal.onClose();
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    },[loginModal]);

    const bodyContent = (
        <div className = "flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value = {email}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Password"
                onChange = {(e)=>setEmail(e.target.value)}
                value = {email}
                disabled = {isLoading}
                />
        </div>
    )
    const footerContent = (
        <div className = "text-neutral-400 text-center-mt-4">
            <p> First Time using Alpha</p>
            <span onClick = {onToggle}
                className="
                    text-white
                    cursor-white
                    cursor-pointer
                    hover:underline">Create an Account </span>
        </div>
    )
        return(

                <Modal 
                    disabled={isLoading}
                    isOpen={LoginModal.isOpen}
                    title="Login"
                    actionLabel="Sign In"
                    onClose={LoginModal.onClose}
                    onSubmit = {onSubmit}
                    body = {bodyContent}
                    footer = {footerContent}
                />
        );
}

export default LoginModal;