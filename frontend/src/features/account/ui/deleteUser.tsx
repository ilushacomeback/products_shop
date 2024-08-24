import { selectors, useAppSelector, useDeleteUserMutation } from "@/shared"

export const DeleteUser = () => {
    const id = useAppSelector(selectors.authSelectors.selectId)
    const [deleteAccount] = useDeleteUserMutation()
    return <button onClick={() => deleteAccount(id)}>Delete account</button>
}