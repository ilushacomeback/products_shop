import { selectors, useAppSelector, useDeleteUser } from "@/shared"

export const DeleteUser = () => {
    const id = useAppSelector(selectors.authSelectors.selectId)
    const [deleteAccount] = useDeleteUser()
    return <button onClick={() => deleteAccount(id)}>Delete account</button>
}