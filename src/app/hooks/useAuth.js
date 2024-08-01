// hooks/useAuth.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const router = useRouter();
    useEffect(() => {

        const currentPath = window.location.pathname;
        const signupPath = ['/signupW', '/addProfilePicture', '/professionaldetails']
        const isSignupPath = signupPath.some(path => currentPath.startsWith(path));

        const protectedPaths = ['/settings', '/dashboard', '/schedule', '/Clients', '/reports'];
        const isProtectedPath = protectedPaths.some(path => currentPath.startsWith(path));

        const signSteps = localStorage.getItem('signSteps');
        const url = localStorage.getItem('url');
        const userData = localStorage.getItem('userData');
      
        if (currentPath == '/') {
            if (signSteps == "true" || signSteps == true) {
               return router.push(url);
            }
            
            if(userData){
              return router.push("/dashboard");
            }
        }

        if (isSignupPath) {

            if (signSteps == "true" || signSteps == true) {
                router.push(url);
            } else {
                router.push('/signupW');
            }
        }

        if (isProtectedPath) {

            if (signSteps) {
                return router.push(url);
            }
           
            if (!userData) {
              return  router.push('/');
            }
        }
    }, [router]);
};

export default useAuth;
