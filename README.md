# INDEX

- [INDEX](#index)
- [`BufferGeometry`](#buffergeometry)
- [Lights](#lights)
- [Depth Test](#depth-test)
- [What happens internally when we create a Mesh](#what-happens-internally-when-we-create-a-mesh)
- [Units in ThreeJS](#units-in-threejs)
  - [`GridHelper`](#gridhelper)
- [Textures in ThreeJS](#textures-in-threejs)
  - [Types of Texture Map properties in ThreeJS](#types-of-texture-map-properties-in-threejs)
    - [`map`](#map)
    - [`alphaMap`](#alphamap)
    - [`normalMap`](#normalmap)
    - [`displacementMap`](#displacementmap)
    - [`roughnessMap`](#roughnessmap)
    - [`metalnessMap`](#metalnessmap)
    - [`emissiveMap`](#emissivemap)
    - [`envMap`](#envmap)
    - [`lightMap`](#lightmap)
    - [`aoMap`](#aomap)
    - [`gradientMap`](#gradientmap)
  - [Behavior of `textureLoader`](#behavior-of-textureloader)
- [Enabling shadows in threejs (TODO: Complete test in test/shadows-experimentation)](#enabling-shadows-in-threejs-todo-complete-test-in-testshadows-experimentation)



# `BufferGeometry`

A `BufferGeometry` in Three.js is a low-level representation of a mesh, line, or point geometry. It stores the vertex positions, face indices, normals, colors, and UV coordinates (texture coordinates) of the geometry in a more efficient format that can be easily passed to the graphics card for rendering.

When you create a `BufferGeometry`, you specify the geometry data (such as vertex positions and face indices) as arrays of numbers, rather than as objects like THREE.Vector3 or THREE.Face3. This data is then stored in a set of buffers, which are essentially large arrays that hold the vertex data in a format that is optimized for GPU processing.

The benefits of using a `BufferGeometry` over a regular Geometry object are primarily performance-related. By storing the geometry data in a set of buffers, `BufferGeometry` reduces the overhead of passing data between the CPU and the GPU. This can lead to faster rendering times and improved frame rates, especially for complex 3D scenes.

In addition to the standard vertex attributes like position, normal, and UV coordinates, `BufferGeometry` also allows you to define custom v`ertex attributes using BufferAttribute. This can be useful for storing additional data such as per-vertex color information or animation data.

Overall, `BufferGeometry` is a powerful tool for optimizing the performance of your Three.js applications, especially if you are working with large or complex geometries. However, it does require a bit more setup and low-level knowledge than using a regular Geometry object.

# Lights

Difference between DirectLight and SpotLight in ThreeJS
In ThreeJS, DirectionalLight and SpotLight are both types of light sources that can be used to illuminate a scene, but they have some key differences.

DirectionalLight illuminates a scene with parallel rays of light, much like the sun. It is often used to simulate natural lighting conditions and can create shadows that appear to be cast by a single, distant light source. DirectionalLight has no position, but instead has a direction vector that determines the direction of the light rays. This type of light is commonly used for outdoor scenes, where the sun is the primary light source.

SpotLight, on the other hand, illuminates a scene with a cone of light, much like a flashlight or a spotlight. It has a position, a direction, and a cone angle that determines the spread of the light. SpotLight can create both soft and hard shadows, depending on the settings used, and is commonly used for indoor scenes, where light sources are more localized.

In summary, DirectionalLight is used for simulating natural lighting conditions and SpotLight is used for localized lighting effects.




Rohan Verma
Difference between PointLight and SpotLight?
In Three.js, PointLight and SpotLight are both types of Light objects that can be used to illuminate a scene. However, they have some key differences in how they emit light.

A PointLight emits light uniformly in all directions from a single point in space. It's typically used to simulate a light bulb or other small light source. PointLight is not directional, so it doesn't have any specific cone or direction of light.

A SpotLight, on the other hand, emits light from a single point in space in a cone-shaped pattern. It has a specific direction and cone angle that can be adjusted to create a focused beam of light. SpotLight is directional, so it can cast shadows and provide a sense of depth and directionality in a scene.

Overall, the main difference between PointLight and SpotLight is that PointLight emits light in all directions, while SpotLight emits light in a specific direction within a cone-shaped pattern.

# Depth Test

In Three.js, the depth test is a mechanism used to determine which pixels should be rendered in front of others, based on their distance from the camera. It is a technique used to ensure that objects that are closer to the camera are rendered in front of objects that are farther away.

When rendering a 3D scene, each pixel on the screen is associated with a depth value, which represents its distance from the camera. The depth test works by comparing the depth value of each pixel being rendered with the depth value of the pixel already present at that location on the screen. If the depth value of the new pixel is greater than that of the existing pixel, it is discarded and not rendered. If the depth value of the new pixel is less than or equal to that of the existing pixel, it is rendered on top of the existing pixel.

The depth test is essential for creating a realistic 3D scene, as it ensures that objects that are closer to the camera appear in front of objects that are farther away. Without the depth test, objects in the scene could be rendered in the wrong order, leading to visual artifacts such as objects appearing to float in the air or intersecting with each other.

# What happens internally when we create a Mesh

```js
// when we create a mesh,
// or any other object derived from Object3D
// such as lights, camera, or even the scene itself
const mesh = new Mesh();

// ... internally, three.js creates
// many different objects to help us transform the object
mesh.position = new Vector3();
mesh.scale = new Vector3();
mesh.rotation = new Euler();

mesh.quaternion = new Quaternion();
mesh.matrix = new Matrix4();
mesh.matrixWorld = new Matrix4();
```

# Units in ThreeJS

Three.js units are not any physical units, but rather they are arbitrary units that are used within the Three.js library. 

The size of one Three.js unit can be adjusted to match the specific needs of the application or the use case. By default, 1 Three.js unit is equal to 1 meter.


## `GridHelper`

- `GridHelper` is a helper object in Three.js that creates a grid of lines in a specified size, color, and spacing. The size of the `GridHelper` refers to the size of the grid it creates.

  When creating a `GridHelper` object, you can specify its size by passing in the size of the grid as the first parameter. For example, `const gridHelper = new GridHelper(10, 10)` will create a grid of lines with a size of 10 units in both the x and y directions.

- The size of GridHelper in Three.js is specified in Three.js units. 

# Textures in ThreeJS

## Types of Texture Map properties in ThreeJS

List of all the map fields available in the Three.js `MeshStandardMaterial`, along with a brief description of each one:


### `map`

The diffuse texture map. 

A diffuse texture map, also known as a diffuse map or albedo map, is a type of texture map used in computer graphics to define the base color of a surface. The map contains the color information that is applied to the surface of a 3D object when it is rendered.

In short, this controls the base color of the material.

### `alphaMap`

A grayscale texture map that controls the transparency of the material. White areas are opaque, black areas are transparent.

### `normalMap`

A texture map that encodes surface normals. This adds extra detail to the surface of the material by simulating bumps and dents.

### `displacementMap`

A texture map that modifies the surface geometry by displacing vertices in the mesh.

### `roughnessMap`

A texture map that controls the roughness of the material. This affects how much light is scattered in different directions on the surface of the material.

### `metalnessMap`

A texture map that controls the metalness of the material. This affects how much the material appears like a metal.

### `emissiveMap`

A texture map that controls the emissive color of the material. This makes the material appear to glow.

### `envMap`

A texture map that controls the environment reflection of the material. This can be used to simulate reflections of the surrounding environment on the surface of the material.

### `lightMap`

A texture map that adds precomputed lighting to the material. This can be used to simulate indirect lighting on the surface of the material.

### `aoMap`

A texture map that controls ambient occlusion on the surface of the material. This darkens areas of the mesh that are close to each other, simulating shadowing.

### `gradientMap`

A texture map that applies a gradient to the material. This can be used to create a range of color variations on the surface of the material.

---

## Behavior of `textureLoader`

The `textureLoader.load()` method in Three.js returns a Promise. 

The promise resolves with the loaded texture object once the texture has finished loading, or rejects if there was an error during loading. You can use .then() and .catch() to handle the promise resolution and rejection, respectively. 

Here's an example:

```javascript
const textureLoader = new THREE.TextureLoader();

textureLoader.load(
  'path/to/texture.png',
  // onLoad callback
  (texture) => {
    // Texture loaded successfully
    console.log('Texture loaded:', texture);
  },
  // onProgress callback
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  // onError callback
  (err) => {
    console.error('Error loading texture:', err);
  }
);
```

# Enabling shadows in threejs (TODO: Complete test in test/shadows-experimentation)

To enable shadows in Three.js, you need to take the following steps:

Enable shadowMap on the renderer: renderer.shadowMap.enabled = true;
Set the type of shadowMap (basic, PCF, or PCFSoft) that you want to use: renderer.shadowMap.type = THREE.PCFSoftShadowMap;
Enable casting and receiving of shadows for the relevant objects:
For objects that should cast shadows: object.castShadow = true;
For objects that should receive shadows: object.receiveShadow = true;
Configure the shadow properties of the relevant lights:
For directional lights, set the shadow properties:
js
Copy code
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;
light.shadow.camera.left = -100;
light.shadow.camera.right = 100;
light.shadow.camera.top = 100;
light.shadow.camera.bottom = -100;
Note: the mapSize values determine the resolution of the shadow map, and the camera values determine the size of the shadow camera frustum.
For point lights and spot lights, set the shadow properties:
js
Copy code
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;
light.shadow.radius = 4; // Only for PCFSoft shadows
Note: the mapSize values and camera values have the same meaning as for directional lights. The radius property is only relevant for PCFSoft shadows, and determines the softness of the shadow edges.
Here's an example of how to enable shadows for a directional light in Three.js:

js
Copy code
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 0);
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;
light.shadow.camera.left = -100;
light.shadow.camera.right = 100;
light.shadow.camera.top = 100;
light.shadow.camera.bottom = -100;
scene.add(light);
In this example, the directional light casts shadows, and the shadow map resolution is set to 1024x1024. The shadow camera frustum is configured to match the size and position of the scene, with a near plane of 0.5 and a far plane of 500.