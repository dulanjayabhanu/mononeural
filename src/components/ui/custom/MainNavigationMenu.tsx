import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu.tsx";
import {Link} from "react-router";
import {Item, ItemActions, ItemContent, ItemDescription, ItemTitle} from "@/components/ui/item.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Cog, FlaskConical, Sparkle} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import triggerNotification from "@/services/triggerNotification.ts";

const MainNavigationMenu = () => {
    return (
        <NavigationMenu viewport={true}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Workspace</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-96 flex flex-col gap-1">
                            <Item variant="outline" asChild>
                                <a href="/trainer">
                                    <ItemContent>
                                        <ItemTitle className="w-full flex flex-row gap-1">
                                            <Cog size={18} />Artificial Neuron Trainer
                                        </ItemTitle>
                                        <ItemDescription>
                                            Train and configure your artificial neuron
                                        </ItemDescription>
                                    </ItemContent>
                                </a>
                            </Item>
                            <Item variant="outline" asChild>
                                <a href="/tester">
                                    <ItemContent>
                                        <ItemTitle className="w-full flex flex-row gap-1">
                                            <FlaskConical size={16}/>Artificial Neuron Tester
                                        </ItemTitle>
                                        <ItemDescription>
                                            Test your neuron with custom data
                                        </ItemDescription>
                                    </ItemContent>
                                    <ItemActions>
                                        <Badge variant="default">new</Badge>
                                    </ItemActions>
                                </a>
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/docs">Documentation</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/examples">Examples</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} onClick={() =>
                        triggerNotification(
                            "default",
                            "This feature is on the way. Stay tuned!",
                            "top-center"
                        )
                    }>
                        <Button
                            variant="ghost"
                            size={"sm"}
                        >
                            Ask AI<Sparkle />
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MainNavigationMenu