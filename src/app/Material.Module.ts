import {NgModule} from "@angular/core"
import {MatCardModule} from "@angular/material/card"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatButtonModule} from "@angular/material/button"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatRadioModule} from "@angular/material/radio"
import {MatDialogModule} from "@angular/material/dialog"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatMenuModule} from "@angular/material/menu"
import {MatListModule} from "@angular/material/list"
import {MatIconModule} from "@angular/material/icon"

@NgModule({
    exports:[
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatIconModule
    ]
})
export class MaterialModule{}