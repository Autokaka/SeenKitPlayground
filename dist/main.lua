--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
do
    local function ____catch(____error)
        seen.log("Error:", ____error)
    end
    local ____try, ____hasReturned = pcall(function()
        seen.log("Hello,", seen.version)
        seen.log("GPU:", seen.gpu)
        local ____opt_0 = seen.gpu
        if ____opt_0 ~= nil then
            ____opt_0:requestAdapter(function(adapter)
                seen.log("Adapter:", adapter)
            end)
        end
    end)
    if not ____try then
        ____catch(____hasReturned)
    end
end
