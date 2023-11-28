import { useState, useTransition } from "react";
const createSwitchableAni = ({ init, onswitched, onoff }) => {
    const [switched, setswitch] = useState(init || false)
    const [isPending, startTransition] = useTransition()
    const trigger = () => {
        if (switched) {
            setswitch(false);
            startTransition(() => {
                onoff?.()
            });
        } else {
            setswitch(true);
            startTransition(() => {
                onswitched?.()
            });
        }
    }
    return {switched,trigger}
}

export default createSwitchableAni;