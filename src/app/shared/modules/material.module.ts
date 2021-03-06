import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSliderModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatInputModule,
        MatGridListModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatListModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTabsModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSliderModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatInputModule,
        MatGridListModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatListModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTabsModule,
        MatDividerModule
    ],
})

export class MaterialModule {
}
