function escape(target: any, propetyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string")
            retorno = retorno.
                replace(/<script>[\s\S]*?<\/script>/, '');
        return retorno;
    }
    return descriptor;
}
export default escape;