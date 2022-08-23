function inspect() {
    return function (tartget: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: Array<any>) {

            const retorno = metodoOriginal.apply(this, args);

            console.log(`--- Método ${propertyKey}`);
            if (args != undefined && args.length > 0)
                console.log(`------- parâmetros:${JSON.stringify(args)}`)
            if (retorno != undefined)
                console.log(`---------- retorno: ${JSON.stringify(retorno)}`)
                
            return retorno;
        }

        return descriptor;
    }
}
export default inspect;