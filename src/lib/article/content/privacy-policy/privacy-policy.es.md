---
title: 'Política de Privacidad'
description: 'Política de Privacidad de Glitch Text Generator - Conozca cómo protegemos su privacidad y cómo recopilamos y utilizamos los datos'
date: '2025-11-16'
author: 'Admin'
tags: ['política de privacidad', 'protección de datos', 'privacidad del usuario']
language: 'es'
---

**Fecha de entrada en vigor: 16 de noviembre de 2025**

Bienvenido a Glitch Text Generator (en adelante, "el Sitio Web" o "nosotros"). Tomamos muy en serio la protección de su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos su información.

## 1. Resumen de Recopilación de Información

### 1.1 Información que NO Recopilamos

**El Sitio Web se compromete a:**

- ❌ **No almacenar ningún contenido de texto que ingrese**: Todo el contenido que ingresa en el generador de texto se procesa localmente solo en su navegador y nunca se carga en nuestros servidores
- ❌ **No requerir registro o inicio de sesión**: Puede usar todas las funciones sin crear una cuenta
- ❌ **No recopilar información de identificación personal**: No recopilamos su nombre, correo electrónico, número de teléfono u otra información personal
- ❌ **No usar Cookies para almacenar datos personales**: No almacenamos ninguna información de identificación personal a través de Cookies

### 1.2 Datos Anónimos que Recopilamos

Para mejorar la calidad del servicio y la experiencia del usuario, recopilamos la siguiente información estadística anónima a través de herramientas de análisis de terceros:

**Recopilado a través de Google Analytics:**

- Vistas de página y rutas de navegación
- Tipos de dispositivos utilizados (escritorio, móvil, tableta, etc.)
- Tipo y versión del navegador
- Información del sistema operativo
- Ubicación geográfica (país/región y nivel de ciudad)
- Fuentes de tráfico (motores de búsqueda, acceso directo, enlaces externos, etc.)
- Tiempo de permanencia en las páginas
- Tipos de generadores utilizados (Zalgo, Cursed, Flip, etc.)

**Recopilado a través de Microsoft Clarity:**

- Repeticiones de sesión anónimas (para analizar patrones de interacción del usuario)
- Datos de mapas de calor (clics, comportamiento de desplazamiento)
- Métricas de rendimiento de página
- Registros de errores de JavaScript

**Nota importante:** Todos estos datos son anónimos y no están vinculados a su identidad personal. No podemos identificar usuarios individuales específicos a través de estos datos.

## 2. Métodos de Procesamiento de Datos

### 2.1 Procesamiento Local

Todas las funciones de conversión de texto se completan localmente en su navegador:

- **Conversión de caracteres Unicode**: Implementado usando JavaScript frontend puro, no se requiere participación del servidor
- **Vista previa en tiempo real**: Todos los efectos de vista previa se renderizan en el lado del cliente
- **Copia de texto**: La función de copia utiliza la API de portapapeles nativa del navegador

**Implementación técnica:**

- Utiliza la biblioteca `unicode-text-decorator` para la conversión de símbolos alfanuméricos matemáticos
- Utiliza la biblioteca `confusables` para la ofuscación de caracteres
- Diccionarios de mapeo de caracteres personalizados para efectos especiales (Zalgo, Cursed, Glitch, etc.)

Esto significa que el contenido de su texto nunca abandona su dispositivo; no podemos ver ni almacenar nada de lo que ingresa.

### 2.2 Sin Almacenamiento en Servidor

El Sitio Web está implementado en Cloudflare usando Generación de Sitio Estático (SSG):

- El sitio web consiste en páginas HTML estáticas pre-renderizadas
- Sin servidor backend ni base de datos
- Sin posibilidad de almacenar datos de usuario

## 3. Servicios de Terceros

### 3.1 Google Analytics

**Propósito:** Análisis de tráfico del sitio web y estadísticas de comportamiento del usuario

**Tipos de datos recopilados:**

- Estadísticas de visitas anónimas
- Métricas de rendimiento de página
- Información de dispositivo y navegador del usuario
- Ubicación geográfica (nivel de país/ciudad)

**Período de retención de datos:** Según la configuración predeterminada de Google Analytics, los datos se retienen durante 26 meses

**Controles de privacidad:** Puede optar por no participar en el seguimiento de Google Analytics mediante:

- Instalación del [Complemento de Navegador para la Desactivación de Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Habilitación de "No Rastrear" en su navegador
- Uso del modo de privacidad/incógnito de su navegador

**Más información:** [Política de Privacidad de Google Analytics](https://policies.google.com/privacy)

### 3.2 Microsoft Clarity

**Propósito:** Análisis de experiencia del usuario y optimización del sitio web

**Tipos de datos recopilados:**

- Repeticiones de sesión anónimas
- Mapas de calor y mapas de desplazamiento
- Análisis de patrones de clics
- Datos de rendimiento de página

**Procesamiento de datos:** Microsoft Clarity no recopila ninguna información de identificación personal (PII); todos los datos son anónimos

**Protección de privacidad:** Clarity enmascara automáticamente información sensible (como el contenido de los campos de entrada de contraseñas)

**Más información:** [Política de Privacidad de Microsoft Clarity](https://privacy.microsoft.com/privacystatement)

### 3.3 Cloudflare

**Propósito:** Alojamiento web y Red de Distribución de Contenido (CDN)

**Datos que Cloudflare puede recopilar:**

- Direcciones IP (para protección de seguridad y análisis de tráfico)
- Tipo y versión del navegador
- Marcas de tiempo de acceso
- URLs de página solicitadas

**Características de seguridad:**

- Protección DDoS
- Cifrado SSL/TLS
- Firewall de Aplicación Web (WAF)

**Más información:** [Política de Privacidad de Cloudflare](https://www.cloudflare.com/privacypolicy/)

## 4. Uso de Cookies

### 4.1 Cookies que Utilizamos

El Sitio Web utiliza Cookies mínimas para proporcionar funcionalidad básica:

**Cookies Esenciales (no se pueden deshabilitar):**

- Configuración de preferencias de tema (modo claro/oscuro)
- Preferencia de selección de idioma (10 opciones de idioma: en, zh, es, fr, de, ja, ko, ru, pt, id)
- Mantenimiento del estado de sesión

**Cookies de Análisis (opcionales):**

- Cookies de Google Analytics (\_ga, \_gid, \_gat)
- Cookies de Microsoft Clarity (\_clck, \_clsk)

### 4.2 Cómo Administrar las Cookies

Puede administrar o eliminar Cookies a través de la configuración del navegador:

- **Chrome:** Configuración > Privacidad y seguridad > Cookies y otros datos del sitio
- **Firefox:** Opciones > Privacidad y Seguridad > Cookies y Datos del Sitio
- **Safari:** Preferencias > Privacidad > Administrar Datos del Sitio Web
- **Edge:** Configuración > Privacidad, búsqueda y servicios > Permisos de cookies y sitios

**Nota:** Deshabilitar las Cookies puede afectar ciertas características del sitio web, como la configuración del tema y las preferencias de idioma.

## 5. Seguridad de Datos

### 5.1 Medidas de Protección Técnica

Implementamos las siguientes medidas de seguridad para proteger su información:

- **Cifrado HTTPS:** Todas las transmisiones de datos están cifradas mediante SSL/TLS
- **CDN de Cloudflare:** Proporciona protección DDoS y Firewall de Aplicación Web
- **Arquitectura de sitio estático:** Sin base de datos ni backend, reduciendo los riesgos de violación de datos
- **Procesamiento local:** La conversión de texto se completa completamente en su navegador; los datos nunca abandonan su dispositivo

### 5.2 Seguridad de Servicios de Terceros

Los servicios de terceros que utilizamos (Google Analytics, Microsoft Clarity, Cloudflare) son todos proveedores líderes en la industria con estrictos estándares de seguridad y medidas de protección de privacidad.

## 6. Protección de la Privacidad de los Niños

El Sitio Web no recopila a sabiendas información personal de niños menores de 13 años. Si usted es padre o tutor y descubre que su hijo nos ha proporcionado información personal, contáctenos e inmediatamente eliminaremos la información relevante.

## 7. Transferencias Internacionales de Datos

El Sitio Web se sirve a través de la red CDN global de Cloudflare, y sus datos pueden transferirse entre servidores en diferentes países/regiones. Aseguramos que todas las transferencias de datos cumplan con las leyes de protección de datos aplicables.

**Regiones aplicables:**

- Usuarios de la UE: Cumplimos con el Reglamento General de Protección de Datos (GDPR)
- Usuarios de EE. UU.: Cumplimos con la Ley de Privacidad del Consumidor de California (CCPA)
- Otras regiones: Cumplimos con las leyes de protección de datos locales aplicables

## 8. Sus Derechos

### 8.1 Acceso y Control de Datos

Dado que no recopilamos ni almacenamos sus datos personales:

- ✅ **Derecho de acceso:** No tenemos datos personales sobre usted para acceder
- ✅ **Derecho de eliminación:** El texto que ingresa nunca se almacena y no requiere eliminación
- ✅ **Derecho a la portabilidad de datos:** Todo el texto generado se puede copiar y usar libremente
- ✅ **Derecho de oposición:** Puede deshabilitar las Cookies de análisis a través de la configuración del navegador

### 8.2 Control de Datos de Análisis

Puede controlar la recopilación de datos de análisis a través de:

1. **Deshabilitar Google Analytics:**
   - Instalar la extensión de navegador de exclusión de Google Analytics
   - Habilitar la función "No Rastrear" de su navegador

2. **Deshabilitar Microsoft Clarity:**
   - Bloquear el dominio clarity.ms en su navegador
   - Usar el modo de privacidad/incógnito para navegar

3. **Borrar Cookies:**
   - Borrar regularmente las Cookies del navegador
   - Usar las funciones de mejora de privacidad de su navegador

## 9. Actualizaciones de la Política de Privacidad

Podemos actualizar esta Política de Privacidad periódicamente. Los cambios significativos se comunicarán a través de:

- Anuncios destacados en la página principal del sitio web
- Actualización de la "Fecha de Entrada en Vigor" en la parte superior de esta página
- Recordatorios a través del sistema de notificaciones del sitio web

**Recomendación:** Revise esta Política de Privacidad regularmente para comprender cómo protegemos su información.

## 10. Notificación de Violación de Datos

Aunque no almacenamos datos de usuario, si ocurre un incidente de seguridad que involucre servicios de terceros, nosotros:

1. Investigaremos inmediatamente el alcance y el impacto del incidente
2. Publicaremos un anuncio en el sitio web para notificar a los usuarios
3. Cooperaremos con los proveedores de servicios relevantes para implementar medidas correctivas
4. Informaremos a las autoridades reguladoras según lo requiera la ley

## 11. Notas de Uso Específicas de la Plataforma

### 11.1 Usuarios de Discord

Si usa texto generado por este sitio web en Discord:

- El texto generado está sujeto a la política de privacidad de Discord
- Discord puede almacenar el contenido de sus mensajes
- Cumpla con las Pautas de la Comunidad y los Términos de Servicio de Discord

### 11.2 Usuarios de Roblox

Si usa texto generado por este sitio web en Roblox:

- El texto generado está sujeto a la política de privacidad de Roblox
- Roblox puede filtrar o registrar el contenido del chat
- Cumpla con la Política de Contenido y los Términos de Uso de Roblox

### 11.3 Usuarios de Minecraft

Si usa texto generado por este sitio web en Minecraft:

- Los servidores pueden registrar el historial del chat
- Diferentes servidores pueden tener diferentes políticas de privacidad
- Cumpla con las reglas del servidor y el EULA de Minecraft

## 12. Contáctenos

Si tiene alguna pregunta, comentario o queja sobre esta Política de Privacidad, contáctenos a través de:

- Visite nuestra [página Acerca de](/about) para obtener información de contacto
- Envíe un mensaje a través del formulario de contacto proporcionado en el sitio web

**Tiempo de respuesta:** Responderemos dentro de los 7 días hábiles posteriores a la recepción de su solicitud.

## 13. Cumplimiento Legal

### 13.1 Leyes Aplicables

Esta Política de Privacidad se rige por las siguientes leyes y regulaciones:

- Reglamento General de Protección de Datos (GDPR) - aplicable a usuarios de la UE
- Ley de Privacidad del Consumidor de California (CCPA) - aplicable a residentes de California
- Otras leyes internacionales y regionales de protección de datos aplicables

### 13.2 Resolución de Disputas

Cualquier disputa que surja de esta Política de Privacidad debe resolverse primero mediante negociación amistosa. Si la negociación falla, las disputas deben someterse a un tribunal con jurisdicción.

## 14. Resumen

**Nuestros Compromisos de Privacidad:**

✅ **Procesamiento completamente local**: El contenido de su texto nunca abandona su navegador  
✅ **No se requiere registro**: Use sin proporcionar información personal  
✅ **Análisis anónimo**: Solo se recopilan datos estadísticos anónimos para mejorar el servicio  
✅ **Transparencia**: Explicación clara de qué datos recopilamos y cómo los usamos  
✅ **Control del usuario**: Puede deshabilitar las funciones de análisis en cualquier momento  
✅ **Seguridad de datos**: Transmisión de datos protegida a través de HTTPS y Cloudflare

**En términos simples:** No sabemos qué texto ingresa y no almacenamos ninguna de su información personal. Solo recopilamos estadísticas anónimas de uso del sitio web para mejorar la experiencia del usuario.

---

**Última actualización: 16 de noviembre de 2025**

¡Gracias por usar Glitch Text Generator! Estamos comprometidos a proteger su privacidad mientras le brindamos la mejor experiencia de generación de texto.
