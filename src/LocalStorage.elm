module LocalStorage exposing (length)

{-| Your application often want to storage data in localStorage.
This library helps your manage of localStorage.

@docs length

-}

import Native.LocalStorage
import Task exposing (Task)


{-| Get the current localStorage length.
-}
length : Task x Int
length =
    Native.LocalStorage.length
