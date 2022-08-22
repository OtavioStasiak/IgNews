import { useState } from 'react';
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import { signIn, useSession } from "next-auth/react"
import styles from './styles.module.scss';

export function SignInButton(){
    
    const {data: session} = useSession();

    return session ?
    (
        <button className={styles.signInButton} type="button">
            <FaGithub color='#04d361'/>
            Otávio Stasiak
            <FiX color='#737380' className={styles.rightIcon}/>
        </button>

    ) : (
        <button onClick={() => signIn('github')} className={styles.signInButton} type="button">
            <FaGithub color='#eba427'/>
            Sign In With Github
        </button>
    )
}