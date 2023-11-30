import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from "./Components/layout/Pages/dash-board/dash-board.component";


const routes: Routes = [
    { path: '', component: DashBoardComponent, pathMatch: "full" },
    { path: 'pages', loadChildren: () => import("./Components/layout/layout.module").then(m => m.LayoutModule) },
    {path: '**', redirectTo: 'Dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}