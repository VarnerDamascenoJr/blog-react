import { ReactNode, useEffect } from "react";
import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import { useRouter } from "next/router";

interface Auth0ProviderRouterProps {
    children: ReactNode
}


const Auth0ProviderWithRouter: React.FC<Auth0ProviderRouterProps> = ({children}) =>{
    const domain = process.env.AUTH_DOMAIN
    const clientId = process.env.AUTH_CLIENT_ID

    const router = useRouter();

    useEffect(() => {
        const { search } = window.location;
        if (search.includes('code=')) {
          onRedirectCallback({});
        }
      }, []); // Executar apenas uma vez ao carregar o componente

    const onRedirectCallback = (appState: any)=>{
        router.push(appState?.returnTo || window.location.pathname)
    }

    const auth0ProviderOptions : Auth0ProviderOptions = {
        domain, 
        clientId,
        onRedirectCallback,
    }

    return <Auth0Provider {...auth0ProviderOptions}>{children}</Auth0Provider>
}

export default Auth0ProviderWithRouter;