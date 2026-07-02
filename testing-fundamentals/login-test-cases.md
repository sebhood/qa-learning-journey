# Login Test Cases

| ID | Caso de prueba | Resultado esperado | Técnica |
|-----|----------------|-------------------|----------|
| TC-01 | Usuario válido + contraseña válida + cuenta activa | Ingreso exitoso | Tabla de decisión |
| TC-02 | Usuario válido + contraseña incorrecta + cuenta activa | Mostrar error | Tabla de decisión |
| TC-03 | Usuario inválido + contraseña válida + cuenta activa | Mostrar error | Tabla de decisión |
| TC-04 | Usuario inválido + contraseña incorrecta + cuenta activa | Mostrar error | Tabla de decisión |
| TC-05 | Usuario válido + contraseña válida + cuenta inactiva | Mostrar mensaje "Cuenta inactiva" | Tabla de decisión |
| TC-06 | Usuario vacío + contraseña válida | Mostrar mensaje requerido | Partición de equivalencia |
| TC-07 | Usuario válido + contraseña vacía | Mostrar mensaje requerido | Partición de equivalencia |
| TC-08 | Usuario con 1 carácter (mínimo 2) | Mostrar error | Valores límite |
| TC-09 | Usuario con exactamente 2 caracteres | Aceptar entrada | Valores límite |
| TC-10 | Usuario con 51 caracteres (máximo 50) | Mostrar error | Valores límite |