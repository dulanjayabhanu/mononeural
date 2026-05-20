import {
    ContextMenuContent, ContextMenuGroup,
    ContextMenuItem, ContextMenuLabel, ContextMenuSeparator,
    ContextMenuSub, ContextMenuSubContent,
    ContextMenuSubTrigger
} from "@/components/ui/context-menu.tsx";
import {
    BriefcaseBusiness,
    Cog,
    FileText,
    FlaskConical,
    House,
    Lightbulb, ReceiptText, RefreshCcw,
    Scale,
    ShieldCheck,
    Sparkle
} from "lucide-react";
import {DropdownMenuSeparator} from "@/components/ui/dropdown-menu.tsx";
import {useNavigate} from "react-router";

const MainContextMenuContent = () => {
    const navigate = useNavigate()

    return (
        <ContextMenuContent>
            <ContextMenuLabel>Current Page</ContextMenuLabel>
            <ContextMenuItem
                onClick={() =>
                    window.location.reload()
                }
            >
                <RefreshCcw size={18} />Reload Page
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>Navigate</ContextMenuLabel>
            <ContextMenuItem
                onClick={() =>
                    navigate("/")
                }
            >
                <House size={18} />Home
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
                <ContextMenuSubTrigger>
                    <BriefcaseBusiness size={18}/>Workspace
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                    <ContextMenuGroup>
                        <ContextMenuItem
                            onClick={() =>
                                navigate("/trainer")
                            }
                        >
                            <Cog size={18} />Artificial Neuron Trainer
                        </ContextMenuItem>
                        <ContextMenuItem
                            onClick={() =>
                                navigate("/tester")
                            }
                        >
                            <FlaskConical size={16}/>Artificial Neuron Tester
                        </ContextMenuItem>
                    </ContextMenuGroup>
                </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem
                onClick={() =>
                    navigate("/docs")
                }
            >
                <FileText size={18} />Documentation
            </ContextMenuItem>
            <ContextMenuItem
                onClick={() =>
                    navigate("/examples")
                }
            >
                <Lightbulb size={18} />Examples
            </ContextMenuItem>
            <ContextMenuItem disabled>
                <Sparkle size={18}/>Ask AI
            </ContextMenuItem>
            <DropdownMenuSeparator />
            <ContextMenuSub>
                <ContextMenuSubTrigger>
                    <Scale size={18}/>Legal
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                    <ContextMenuGroup>
                        <ContextMenuItem
                            onClick={() =>
                                navigate("/privacy")
                            }
                        >
                            <ShieldCheck size={18} />Privacy
                        </ContextMenuItem>
                        <ContextMenuItem
                            onClick={() =>
                                navigate("/terms")
                            }
                        >
                            <ReceiptText size={18} />Terms
                        </ContextMenuItem>
                    </ContextMenuGroup>
                </ContextMenuSubContent>
            </ContextMenuSub>
        </ContextMenuContent>
    )
}

export default MainContextMenuContent