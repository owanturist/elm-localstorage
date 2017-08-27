module LocalStorage exposing (clear, getItem, key, length, removeItem, setItem)

{-| Your application often want to storage data in localStorage.
This library helps your manage of localStorage.

@docs length, key, getItem, setItem, removeItem, clear

-}

import Json.Decode as Decode
import Json.Encode as Encode
import Native.LocalStorage
import Task exposing (Task)


{-| Returns an integer representing the number of data items stored in the localStorage object.
-}
length : Task x Int
length =
    Native.LocalStorage.length


{-| When passed a number n, this method will return the name of the nth key in the storage.
-}
key : Int -> Task x (Maybe String)
key =
    Native.LocalStorage.key


{-| When passed a key name, will return that key's value.
-}
getItem : String -> Task String (Maybe Decode.Value)
getItem =
    Native.LocalStorage.getItem


{-| When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
-}
setItem : String -> Encode.Value -> Task x ()
setItem =
    Native.LocalStorage.setItem


{-| When passed a key name, will remove that key from the storage.
-}
removeItem : String -> Task x ()
removeItem =
    Native.LocalStorage.removeItem


{-| When invoked, will empty all keys out of the storage.
-}
clear : Task x ()
clear =
    Native.LocalStorage.clear
